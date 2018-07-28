class Lanzamiento{
  constructor(lanzamiento,timer){
    this.lanzamiento = new Date(lanzamiento);
    this.timer = document.querySelectorAll(timer);
    this.leftTime = this.lanzamiento - new Date();
  }  
  restante(){
    this.leftTime = this.lanzamiento - new Date();
    this.dias = parseInt(this.leftTime / 86400000);
    this.leftTime = this.leftTime % 86400000
    this.horas = parseInt(this.leftTime / 3600000)
    this.leftTime = this.leftTime % 3600000
    this.minutos = parseInt(this.leftTime / 60000)
    this.leftTime = this.leftTime % 60000
    this.segundos = parseInt(this.leftTime / 1000)
    this.leftTime = this.leftTime % 1000
    this.mostrar()
  }
  mostrar(){
    lanzamiento.timer[0].firstElementChild.textContent = this.dias
    lanzamiento.timer[1].firstElementChild.textContent = this.horas
    lanzamiento.timer[2].firstElementChild.textContent = this.minutos
    lanzamiento.timer[3].firstElementChild.textContent = this.segundos
  }
  iniciar(){
    this.restante()
    setInterval(()=>{
      lanzamiento.restante()
    }, 1000)
  }
}
lanzamiento = new Lanzamiento("08/20/2018 07:00 AM",".time");
lanzamiento.iniciar()