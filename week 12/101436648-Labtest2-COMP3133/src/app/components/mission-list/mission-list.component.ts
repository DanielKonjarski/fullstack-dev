import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SpaceXService } from '../../services/spacex.service';
import { SpaceXLaunch } from '../../models/spacex-launch.interface';
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MissionFilterComponent
  ]
})
export class MissionListComponent implements OnInit {
  launches: SpaceXLaunch[] = [];
  filteredLaunches: SpaceXLaunch[] = [];
  displayedColumns: string[] = ['flight_number', 'mission_name', 'launch_year', 'details', 'rocket', 'links', 'actions'];

  constructor(
    private spaceXService: SpaceXService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadLaunches();
  }

  loadLaunches(): void {
    this.spaceXService.getAllLaunches().subscribe(
      (data) => {
        this.launches = data;
        this.filteredLaunches = data;
      },
      (error) => {
        console.error('Error fetching launches:', error);
      }
    );
  }

  onYearFilter(year: string | null): void {
    if (year) {
      this.spaceXService.getLaunchesByYear(year).subscribe(
        (data) => {
          this.filteredLaunches = data;
        },
        (error) => {
          console.error('Error fetching launches by year:', error);
        }
      );
    } else {
      this.filteredLaunches = this.launches;
    }
  }

  navigateToDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }
}