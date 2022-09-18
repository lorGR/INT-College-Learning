***Design: GVI - API***

*features*: 
    __mentors__
    {
        getMentors = API/mentors/getMentors                         -> Get all mentors
        getMentor = API/mentors/getMentor                           -> Get 1 mentor
        getMentorByFilter = API/mentors/getMentorByFilter           -> Get mentor by filter (Country, Industry, Name)
        getMyMentors = API/mentors/getMyMentors                     -> Get all my aproved mentors
        removeMentor = API/mentors/removeMentor                     -> Remove mentor from list
    }
    __mentees__
    {
        getMentees = API/mentees/getMentees                         -> Get all mentees
        getMentee = API/mentees/getMentee                           -> Get 1 mentee
        getMenteeByFilter = API/mentees/getMenteesByFilter          -> Get mentee by filter (Country, Industry, Name)
        getMyMentees = API/mentees/getMyMentees                     -> Get all my aproved mentees
        removeMentee = APi/mentees/removeMentee                     -> Remove mentee from list
    }
    __users__
    {
        getLoggedInUser = API/users/getLoggedInUser                 -> Get logged in user
        editUser = API/users/editUser                               -> Edit user's information
        deleteUser = API/users/deleteUser                           -> Delete user from system
    }
    __requests__
    {
        sendRequest = API/requests/sendRequest                      -> Send request to mentee/mentor by user's role
        getRequests = API/requests/getRequests                      -> Get all my requests (mentee/mentor) by user's role
        getRequestsByFilter = API/requests/getRequestsByFilter      -> Getting all requests by filter (aproved, rejected, pending)    
        setRequestStatus = API/requests/setRequestStatus            -> Setting request status (aproved, reqjected, pending)
    }
    __messages__
    {
        sendMessage = API/messages/sendMessage                      -> Send Message to (mentee/mentor)
        sendDocument = API/messages/sendDocument                    -> Send Document to (mentee/mentor)
        getRecentMessagesWith = API/messages/getRecentMessagesWith  -> Getting 20 messages with (mentee/mentor) scrolling will load 20 more
    }
    
