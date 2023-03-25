const product1 = {
  image: 'img/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'img/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'img/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const product1Elm = document.querySelector('#product1');
product1Elm.classList.add('border-primary');

const btn2Elm = document.querySelector('#btn2');
btn2Elm.classList.remove('btn-primary');

const card3TitleElm = document.querySelector('#card3-title');
card3TitleElm.classList.toggle('text-center');
