SELECT 
    DATEDIFF(NOW(),
            (SELECT 
                    MIN(CREATED_AT)
                FROM
                    post))