import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpaceXLaunch } from '../../models/spacex-launch.interface';
import { SpaceXService } from '../../services/spacex.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class MissionDetailsComponent implements OnInit {
  launch: SpaceXLaunch | null = null;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spaceXService: SpaceXService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const flightNumber = params.get('id');
      if (flightNumber) {
        this.fetchMissionDetails(Number(flightNumber));
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  fetchMissionDetails(flightNumber: number): void {
    this.loading = true;
    this.error = false;
    
    this.spaceXService.getLaunchByFlightNumber(flightNumber).subscribe(
      (data) => {
        this.launch = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching mission details:', error);
        this.error = true;
        this.loading = false;
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}