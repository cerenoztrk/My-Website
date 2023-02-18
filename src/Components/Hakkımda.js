import React from 'react'
import Developer from "../img/28242367.jpg";

const Hakkımda = () => {
  return (
    <div className="about-container" id="hakkımda">
      <div className="developer-imag">
        <img src={Developer} alt="developer-girl" />
      </div>
      <div className="my-about">
        <div className="who-im">
          <h2>Ben Kimim?</h2>
          <p>
             Ben Ceren, 22 yaşındayım. İstanbul Gelişim Üniversitesi Bilgisayar Teknolojisi önlisans mezunuyum.
             Şu anda Yönetim Bilişim Sistemleri bölümünde okuyorum.
             İstanbulda yaşıyorum. Bir süredir ön uç alanında geliştirme yapıyorum.
             Sorunları çözme yeteneğim var. Sektörde kendi alanımda uzmanlaşmak ve
             elimden geldiğince iyi bir yazılımcı olmak istiyorum. Kendimi bu alanda başarılı
             buluyorum ve gelecekte daha da başarılı olmak için çalışmaya hazırım.
          </p>
          <div className="whats-language">
          <h2>Hangi programlama dillerini biliyorum?</h2>
          <p>
              Frontend geliştirmede HTML, CSS ve JavaScript dillerini biliyorum.
              Ayrıca C#,Java dillerine hakimim. UI kitaplığı olarak React.js 
              çerçevesini de biliyorum ve React Native'i öğreniyorum. Son zamanlardaki 
              hedeflerimden biri, temel bir PHP bilgisi ve ayrıca daha fazla backend bilgisine sahip olmak.
          </p>
          </div>  
        </div>
      </div>
      
    </div>
  )
}

export default Hakkımda;
