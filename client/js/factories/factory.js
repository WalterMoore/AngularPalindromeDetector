angular.module('PalindromeApp').controller('Data', function () {

    var data = {
        forwardWord: ''
    };

    return {
        getForwardWord: function () {
            return data.forwardWord;
        },
        setForwardWord: function (firstName) {
            data.forwardWord = forwardWord;
        }
    };
});