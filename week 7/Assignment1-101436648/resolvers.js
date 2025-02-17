const User = require('./models/User');
const Employee = require('./models/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    async login(_, { username, password }) {
      const user = await User.findOne({ username });
      if (!user) throw new Error('User not found');
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error('Invalid credentials');
      return user;
    },
    async getAllEmployees() {
      return await Employee.find();
    },
    async searchEmployeeByEid(_, { id }) {
      return await Employee.findById(id);
    },
    async searchEmployeeByDesignationOrDepartment(_, { designation, department }) {
      return await Employee.find({
        $or: [{ designation }, { department }]
      });
    }
  },
  Mutation: {
    // Update signup mutation to return MutationResponse
    async signup(_, { username, email, password }) {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error('Email already exists');
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();

      // Return MutationResponse with success and message
      return {
        message: "User created successfully",
        success: true
      };
    },
    async addNewEmployee(_, { first_name, last_name, email, gender, designation, salary, date_of_joining, department, employee_photo }) {
      const employee = new Employee({ first_name, last_name, email, gender, designation, salary, date_of_joining, department, employee_photo });
      await employee.save();
      return employee;
    },
    async updateEmployeeByEid(_, { id, first_name, last_name, email, gender, designation, salary, date_of_joining, department, employee_photo }) {
      const employee = await Employee.findByIdAndUpdate(id, {
        first_name, last_name, email, gender, designation, salary, date_of_joining, department, employee_photo
      }, { new: true });
      return employee;
    },
    async deleteEmployeeByEid(_, { id }) {
      await Employee.findByIdAndDelete(id);
      return 'Employee deleted successfully';
    }
  }
};

module.exports = resolvers;
