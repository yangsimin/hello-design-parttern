interface IUser {
  Insert(user: User): void
  GetUser(id: number): void
}

interface IDepartment {
  Insert(department: Department): void
  GetDepartment(id: number): void
}

class User {
  private _id: number

  get ID() {
    return this._id
  }

  set ID(id: number) {
    this._id = id
  }

  private _name: string

  get Name() {
    return this._name
  }

  set Name(name: string) {
    this._name = name
  }
}

class Department {
  private _id: number

  get ID() {
    return this._id
  }
}


class SqlServerUser implements IUser {
  Insert(user: User) {
    console.log('在SQL Server中给User表增加一条记录')
  }

  GetUser(id: number) {
    console.log('在SQL Server中根据ID得到User表的一条记录')
    return null
  }
}

class AccessUser implements IUser {
  Insert(user: User) {
    console.log('在Access中给User表增加一条记录')
  }

  GetUser(id: number) {
    console.log('在Access中根据ID得到User表的一条记录')
    return null
  }
}

class SqlServerDepartment implements IDepartment {
  Insert(department: Department) {
    console.log('在SQL Server中给Department表增加一条记录')
  }

  GetDepartment(id: number) {
    console.log('在SQL Server中根据ID得到Department表的一条记录')
  }
}

class AccessDepartment implements IDepartment {
  Insert(department: Department) {
    console.log('在Access中给Department表增加一条记录')
  }

  GetDepartment(id: number) {
    console.log('在Access中根据ID得到Department表的一条记录')
  }
}

class DataAccess {
  private static readonly db: string = 'SqlServer'
  // private static readonly db: string = 'Access'


  public static CreateUser(): IUser {
    switch (DataAccess.db) {
      case 'SqlServer':
        return new SqlServerUser()
      case 'Access':
        return new AccessUser()
      default:
        throw new Error('Invalid database type')
    }
  }

  public static CreateDepartment(): IDepartment {
    switch (DataAccess.db) {
      case 'SqlServer':
        return new SqlServerDepartment()
      case 'Access':
        return new AccessDepartment()
      default:
        throw new Error('Invalid database type')
    }
  }
}

function main() {
  const user = new User()
  const dept = new Department()
  const iu = DataAccess.CreateUser()
  iu.Insert(user)
  iu.GetUser(1)

  const id = DataAccess.CreateDepartment()
  id.Insert(dept)
  id.GetDepartment(1)
}

main()

export { }
