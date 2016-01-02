/**
 * Vue Plugin Install.
 */

function install(Vue) {

    var AlertConstructor = Vue.extend(require('./alert.vue'));
    var alertInstance = null;

    Object.defineProperty(Vue.prototype, '$alert', {

        get: function () {

            return (message) => {
                if (alertInstance) return;
                alertInstance = new AlertConstructor({
                    el: document.createElement('div'),
                    data() {
                        return {
                            message: message
                        }
                    }
                });
                alertInstance.$appendTo(document.body);
            };
        }

    });

    Vue.transition('bounceIn', {
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
