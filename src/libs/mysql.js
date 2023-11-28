import mysql from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: 'Zomboy1234@',
        port: 3306,
        database: 'clinica_db'
    }
})
