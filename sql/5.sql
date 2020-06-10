SELECT 
    NAME
FROM
    user
WHERE
    (SELECT 
            COUNT(*)
        FROM
            post
        WHERE
            USER_ID = user.USER_ID) > 3