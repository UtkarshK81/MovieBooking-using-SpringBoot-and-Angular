export class Theatre {
       constructor(
       public theatreID: number,
       public  theatreName: string,
       public theatreCity: string,
       public managerName: string,
       public managerContact: number,
       ){
              this.theatreID=theatreID;
              this.managerContact=managerContact;
              this.managerName=managerName;
              this.theatreCity=theatreCity;
              this.theatreName=theatreName;
       }
       }