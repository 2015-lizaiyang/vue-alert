/**
 * Vue Plugin Install.
 */

function install(Vue) {

    var AlertConstructor = Vue.extend(require('./alert.vue'));
    var alertInstance = null;

    Object.defineProperty(Vue.prototype, '$alert', {

        get: function () {

            return (message, position) => {
                if (alertInstance) return;
                alertInstance = new AlertConstructor({
                    el: document.createElement('div'),
                    data() {
                        return {
                            message: message,
                            position: position
                        };
                    }
                });
                alertInstance.$appendTo(document.body);
            };
        }

    });

    Vue.transition('fadeIn', {
        afterEnter: function (el) {
            setTimeout(() => {
                alertInstance.$remove();
            }, 2000);
        },
        afterLeave: function (el) {
            alertInstance = null;
        }
    });
}

if (window.Vue) {
    Vue.use(install);
}

module.exports = install;
