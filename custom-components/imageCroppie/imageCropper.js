var app = require('../../bootstrap-angular');

app.directive("imageCroppie", function() {
    return {
        template: `
            <div>
                <img id='{{elem}}' src='{{src}}' style='width: {{width}}px; height: {{height}}px;' />
                <button ng-click='crop()' style="{{btnStyle}}" type="button">Salvar</button>
            </div>`,
        scope: {
            elem: '@elem',
            src: '@src',
            width: '@width',
            height: '@height',
            btnStyle: '@btnStyle'
        },
        compile: function(element, attrs) {
            var elem = element.find('img');

            var croppie = new Croppie(elem, {
                viewport: { width: 100, height: 100 },
                boundary: { width: 300, height: 300 },
                showZoomer: false,
                enableOrientation: true
            });

            croppie.bind({
                url: attrs.src,
                orientation: 4
            });

            croppie.result('blob').then(function(blob) {
                // do something with cropped blob
            })
        },
        link: function(scope, element, attrs) {
            scope.crop = function() {
                alert('Cortou!');
            };
        }
    };
});
