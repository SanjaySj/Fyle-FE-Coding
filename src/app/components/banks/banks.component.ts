import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Banks } from 'src/app/shared/bankModel';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {

  displayedColumns = ['Bank ID', 'IFSC', 'Bank Name', 'City', 'State'];
  bankBranchList: Banks[];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private commonService: CommonService) {
    this.getListOfBranches();
  }

  getListOfBranches() {
    this.commonService.getListOfBanks('MUMBAI')
      .toPromise()
      .then(res => {
        this.bankBranchList = res as Banks[];
        this.dataSource = new MatTableDataSource(this.bankBranchList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
      .catch(res => {

      });
  }

  ngOnInit() { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}

