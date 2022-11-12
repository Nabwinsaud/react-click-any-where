type TDepartment = {
  name: string;
};

type TEmployee = {
  name: string;
  age: number;
};

class Company {
  private static role: string = "admin";
  //   private readonly credentials: string = "";
  private credentials: string = "";
  private department: TDepartment[] = [];
  private employee: TEmployee[] = [];
  constuctor(cred: string) {
    this.credentials = cred;
  }

  addDepartment(value: TDepartment) {
    this.department = [...this.department, value];
  }

  addEmployee(value: TEmployee) {
    this.employee = [...this.employee, value];
  }
}

class CompanyEmployee extends Company {
  private new_employee: TEmployee = { name: "Nabin", age: 12 };

  public setEmployeeName(name: TEmployee) {
    this.new_employee = name;
  }
}

// creating object
const newCompanyEmployee = new CompanyEmployee();
newCompanyEmployee.setEmployeeName({ name: "Larry", age: 40 });
newCompanyEmployee.addDepartment({ name: "Software development" });

newCompanyEmployee.addEmployee({ name: "harry", age: 32 });

export {};
