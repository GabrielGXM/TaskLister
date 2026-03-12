class Tarefa {
    constructor(name,frequency){
        this.id = Date.now()
        this.name = name
        this.frequency = frequency
        this.done = false
        this.createdAt = new Date()
        this.doneAt = null
    }
    
    
 }