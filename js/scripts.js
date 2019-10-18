$('.gosnomer-input-1,.gosnomer-input-2,.gosnomer-input-3,.gosnomer-input-4').on('keyup change', function () {
  $t = $(this);


  var card_number = '';
  $('.gosnomer-input-1').each(function () {
    if ($(this).val().length == 1) {
      $(this).next().focus();
    }
  })

  var card_number = '';
  $('.gosnomer-input-2').each(function () {
    if ($(this).val().length == 3) {
      $(this).next().focus();
    }
  })

  var card_number = '';
  $('.gosnomer-input-3').each(function () {
    if ($(this).val().length == 2) {
      $(this).next().focus();
    }
  })


  var card_number = '';
  $('.gosnomer-input-4').each(function () {
    if ($(this).val().length == 3) {
      $(this).next().focus();
    }
  })
});


$(window).on('load', function() {
	if ($('*').is('#cnvs')) {
		var canvas=document.getElementById('cnvs');
		var circle=document.getElementById('cnvs');
		var ctx = canvas.getContext('2d');
		var ctx1 = circle.getContext('2d');
		var per = $('.counter').data('per');

	function drawCircle() {
		var eAngle = per/100*2;
		ctx.clearRect(0, 0, 320, 320);
		ctx1.lineWidth = 15;
		var grad1= ctx1.createLinearGradient(0, 0, 140, 140);
		grad1.addColorStop(0, "#E9E9E9");
		grad1.addColorStop(1, "#F9F9F9");
		ctx1.strokeStyle = grad1;
		ctx.shadowColor = '#fff';

		ctx1.beginPath();
		ctx1.arc(150, 150, 140, 0*Math.PI, 2*Math.PI, 0);
		ctx1.stroke();
		ctx1.closePath();

		ctx.lineWidth = 15; // толщина линии
		ctx.shadowColor = '#60C9F7';
		ctx.shadowBlur = 6;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;

		var grad= ctx.createLinearGradient(0, 0, 280, 280);
		grad.addColorStop(0, "#1959DA");
		grad.addColorStop('0.3', "#1959DA");
		grad.addColorStop(1, "#1AD2FC");
		ctx.strokeStyle = grad;

		ctx.beginPath();
		ctx.arc(150, 150, 140, 0*Math.PI, eAngle*Math.PI, 0);
		ctx.stroke();

		ctx.closePath();
		ctx.beginPath();
		for(var i=0;i<=3.6*per;i++) {
			var x = 150 + 140 * Math.cos(i*Math.PI/180) * 1;
			var y = 150 + 140 * Math.sin(i*Math.PI/180) * 1;
			ctx.shadowBlur = 0;
			ctx.beginPath();
			var grad= ctx.createLinearGradient(0, 0, 280, 280);
			grad.addColorStop(0, "#1959DA");
			grad.addColorStop('0.3', "#1959DA");
			grad.addColorStop(1, "#1AD2FC");
			ctx.fillStyle = grad;
			ctx.arc(x, y, 7.5, 0, 2 * Math.PI);
			ctx.fill();
		}
		ctx.closePath();
	}

	drawCircle();

	var start = $('.counter').data('start');
	var end = $('.counter').data('end');
	CountDownTimer(end, 'countdown');

	function CountDownTimer(dt, id)
	{
		var end = new Date(dt);

		var _second = 1000;
		var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;
		var timer;

		function showRemaining() {
			var now = new Date();
			var day = new Date(start);
			var distance = end - now;
			if (distance < 0) {

				clearInterval(timer);
				document.getElementById(id).innerHTML = 'EXPIRED!';

				return;
			}
			var days = Math.floor(distance / _day);
			var hours = Math.floor((distance % _day) / _hour);
			var minutes = Math.floor((distance % _hour) / _minute);
			var seconds = Math.floor((distance % _minute) / _second);
			if (days <= 9) {
				days = '0' + days;
			}
			if (hours <= 9) {
				hours = '0' + hours;
			}
			if (minutes <= 9) {
				minutes = '0' + minutes;
			}
			if (seconds <= 9) {
				seconds = '0' + seconds;
			}

			document.getElementById(id).innerHTML = '<div class="counter-content__item"><span>' + days + '</span>Дней</div>:';
			document.getElementById(id).innerHTML += '<div class="counter-content__item"><span>' + hours + '</span>Час</div>:';
			document.getElementById(id).innerHTML += '<div class="counter-content__item"><span>' + minutes + '</span>Минут</div>:';
			document.getElementById(id).innerHTML += '<div class="counter-content__item"><span>' + seconds + '</span>Секунд</div>';
		}

		timer = setInterval(showRemaining, 1000);
		
	}
	}
	
});

$(document).ready(function() {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%',
			templateResult: formatState,
			templateSelection: formatState,
		});
		function formatState (opt) {
			if (!opt.id) {
				var $opt = $(
					'<span>' + opt.text + '</span>'
				);
				 return $opt;
			} 
	
			var optimage = $(opt.element).attr('data-image'); 
			console.log(optimage)
			if(!optimage){
				var $opt = $(
					'<span>' + opt.text + '</span>'
				);
				 return $opt;
			} else {                    
					var $opt = $(
						 '<span><span class="icon"><img src="' + optimage + '"/></span>' + opt.text + '</span>'
					);
					return $opt;
			}
		};
});