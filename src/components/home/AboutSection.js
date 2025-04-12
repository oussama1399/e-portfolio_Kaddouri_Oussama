import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">À Propos de Moi</h2>
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-up">
            <p>
              Depuis mon plus jeune âge, j'ai été fasciné par la puissance de la technologie et son impact sur notre quotidien. 
              Aujourd'hui, en tant qu'étudiant en Business Intelligence & Analytics, je m'efforce de transformer cette passion en solutions concrètes.
            </p>
            <p data-aos="fade-up" data-aos-delay="100">
              Parallèlement, je suis fier d'être le co-fondateur de <strong><a href="https://cours-deploy-1.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">Smart Programmers</a></strong>, une école dédiée à l'enseignement de l'informatique aux adolescents et aux jeunes de moins de 20 ans. 
              Notre mission est de démocratiser l'accès aux compétences numériques et d'inspirer la prochaine génération de créateurs technologiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
