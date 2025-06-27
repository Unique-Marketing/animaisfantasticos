export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[ data-anime="scroll"]');
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) section.classList.add('ativo');
      else section.classList.remove('ativo');
    });
  }

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    animaScroll(); // Chamar a função para verificar se as seções já estão visíveis no carregamento da página
    // Adicionar o evento de scroll para verificar a visibilidade das seções

    window.addEventListener('scroll', animaScroll);
  }
}
