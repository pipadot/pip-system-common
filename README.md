Pip System

Pip Common Library

- **Error Handeler**
- **Error Response**
- **Current User**
- **Current Agency**
- **Current App Agency**
- **Require Auth**
- - requireLogin
- - requireRole
- - requireAgencyLogin
- - requireAgencyRole
- - requireAppLogin
- - requireAppRole
- **Validate Request**

# Get Started

## Request Session

- User ADM: user_access_token
- Agency VN: agency_access_token

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
- "-611" : Invalid Refresh Token

## Account Status

- Active = 1
- InActive = 0
- Block = 2

## Error Form Response

- response_status: negative number
- errors: Array Object
- - Object: { message: string, field?: string }

# User Payload

- id: string
- phone: string
- name: string
- role: string
- status: number

# Agency Web Payload

- id: string
- phone: string
- name: string
- role: string
- status: number
- rank?: number
- isTransportation?: boolean
- isDriver?: boolean

# Agency Mobile APP Payload

- id: string
- phone: string
- name: string
- role: string
- status: number
- rank?: number
- isTransportation?: boolean
- isDriver?: boolean
