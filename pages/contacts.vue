<template lang="html">
  <section>
    <div class="container">
      <h1>Контакты</h1>
      <div class="main">
        <p>Региональная спортивная общественная организация <br>«Федерация тхэквондо (ГТФ) Московской области»</p>
        <p>ОГРН: 1175000002320, ИНН: 5009110448, КПП: 500901001, 142001, Московская область, город Домодедово, улица Набережная (Северный Мкр.), дом 16 корпус 1 <br>e-mail: taekwondogtfmo@mail.ru <br>Тел. +79259163736 — Исполнительный директор</p>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d63d3dee22ec1b1ec00ea24529a673ef728537af2a330c9e077488daafa91ff&amp;source=constructor" width="100%" height="400" frameborder="0" style="border-radius:20px"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default{}
</script>

<style lang="css" scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
}
.main{
  background-color: #222222;
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  margin-top: 20px;
}
h1{
  color: white;
}
p{
  color: white;
  margin:10px;
}
@media (max-width: 450px){
  .main{
    width: 100%;
  }
}
</style>
