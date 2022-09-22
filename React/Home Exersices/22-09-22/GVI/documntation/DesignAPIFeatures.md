***Design: GVI - API***

*features*: 
    __mentors__ (group 5)
    {
        getMentors = API/mentors/getMentors                                             -> Get all mentors
        getMentor = API/mentors/getMentor                                               -> Get 1 mentor
        getMentorByFilter = API/mentors/getMentorByFilter                               -> Get mentor by filter (Country, Industry, Name)
        getMyMentors = API/mentors/getMyMentors                                         -> Get all my aproved mentors
        removeMentor = API/mentors/removeMentor                                         -> Remove mentor from list
    }
    __mentees__ (group 4)
    {
        getMentees = API/mentees/getMentees                                             -> Get all mentees
        getMentee = API/mentees/getMentee                                               -> Get 1 mentee
        getMenteeByFilter = API/mentees/getMenteesByFilter                              -> Get mentee by filter (Country, Industry, Name)
        getMyMentees = API/mentees/getMyMentees                                         -> Get all my aproved mentees
        removeMentee = API/mentees/removeMentee                                         -> Remove mentee from list
    }
    __users__(group 2)
    {
        register
        getLoggedInUser = API/users/getLoggedInUser                                     -> Get logged in user
        editUser = API/users/editUser                                                   -> Edit user's information
        deleteUser = API/users/deleteUser                                               -> Delete user from system
    }
    __requests__ (group 3)
    {
        <!-- sendRequestMentor = API/requestsMentor/sendRequestMentor                        -> Send request to mentor 
        getRequestsMentor = API/requestsMentor/getRequestsMentor                        -> Get all my requests from mentor -->
        getMyRequests = API/requestsMentor/getMyRequests        -> Getting all requests by filter (aproved, rejected, pending)    
        <!-- setRequestMentorStatus = API/requestsMentor/setRequestMentorStatus              -> Setting request status (aproved, reqjected, pending) -->
    }
    __requestsMentee__ (group 2)
    {
        sendRequestMentee = API/requestMentee/sendRequestMentee                         -> Send request to mentee
        getRequestMentee = API/requestMentee/getRequestMentee                           -> Get all my request from mentee
        getRequestsMenteeByFilter = API/requestMentee/getRequestsMenteeByFilter         -> Getting all requests by filter (aproved, rejected ,pending)
        setRequestMenteeStatus = API/requestMentee/setRequestMenteeStatus               -> Setting requests status (aproved, rejected, pending)
    }
    __messages__ (group1)
    {
        sendMessage = API/messages/sendMessage                                          -> Send Message to (mentee/mentor)
        sendDocument = API/messages/sendDocument                                        -> Send Document to (mentee/mentor)
        getDocuments = API/messages/getDocuments                                        -> Get documents from mentee/mentor
        getRecentMessagesByUserId = API/messages/getRecentMessagesByUserId              -> Getting 20 messages with (mentee/mentor) scrolling will load 20 more
    }

