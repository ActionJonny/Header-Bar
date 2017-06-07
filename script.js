$('.main').on('click', event => {
  const $nav = $('nav')
  const $search = $('.search')
  if($nav.hasClass('is-active')) {
    $nav.removeClass('is-active');
    $search.removeClass('is-active');
  } else {
    $nav.addClass('is-active');
    $search.addClass('is-active');
  }
})
