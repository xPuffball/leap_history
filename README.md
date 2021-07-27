## Aircall - About

Aircall is a minimalistic call history app created with ReactJS and axios.
Aircall is multi-tab and performs GET/POST request to an API to render/update call details.

## Airacll - Features
Aircall users can view a call history through 4 filtered categories:
- All Calls
- Inbox (Inbound calls)
- Outbox (Outbound calls)
- Archived (Archived calls)

Users are also able to archive any call in the first three categories - they are also able to navigate to the archived section and unarchive any previously archived call. Each call has an icon corresponding to its call type - inbound, outbound, missed, voicemail.

# Screenshots
![app1](./documents/Feature2.jpg)
![app2](./documents/Feature2.jpg)
![app3](./documents/Feature2.jpg)

## Installation

We're using [yarn](https://yarnpkg.com) here:

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://aircall-job.herokuapp.com.

As you can see, it's hosted on a free Heroku server, which means that the first time you will fetch the API, it will take few seconds to answer.

- **GET** - https://aircall-job.herokuapp.com/activities: get calls to display in the Activity Feed
- **GET** - https://aircall-job.herokuapp.com/activities/:id: retrieve a specific call details
- **POST** - https://aircall-job.herokuapp.com/activities/:id: update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:
```
{
  is_archived: true
}
```
- **GET** - https://aircall-job.herokuapp.com/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.


