SELECT 
    NAME, COUNT(*)
FROM
    user
        JOIN
    post ON post.USER_ID = user.USER_ID
WHERE
    DATEDIFF(CREATED_AT, '2020-03-01') = 0
GROUP BY NAME