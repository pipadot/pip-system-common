Pip System

Pip Common Library

- **Error Handeler**
- **Error Response**
- **Current User**
- **Require Auth**
- - Require Login
- - Require Role
- **Validate Request**

# Get Started

## Error Status:

- "-600" : Bad Request
- "-601" : NotAuthenticateError
- "-602" : Data Not Found
- "-603" : NotAuthorizedError
- "-604" : Database connection error
- "-605" : RequestValidationError
- "-606" : Not Found Error
- "-607" : PipTokenExpiredError
- "-608" : PipJsonWebTokenError
- "-609" : PipTokenNotBeforeError
- "-610" : PermissionDeniedError

## Account Status

- Active = 1
- InActive = 0
- Block = 2

## Error Form Response

- response_status: negative number
- errors: Array Object
- - Object: { message: string, field?: string }

# Current User

- id: string
- phone: string
- name: string
- role: string
- status: number

# Current Agency

- id: string
- phone: string
- name: string
- role: string
- status: number
- rank?: number
- isTransportation?: boolean
- isDriver?: boolean
