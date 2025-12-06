declare global{
    var mongoose:{
        conn:Conection | null,
        promise:Promise<Connection> | null
    }
}

export {}