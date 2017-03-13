'use strict';

angular.module('fundrikaApp')
    .factory('Utility', function ($location, $q) {

        function isActivePath(route) {
            return route === $location.path();
        }

        function byteToImage(byte) {
            var dataCheck = byte.split(',');
            if (dataCheck.length === 1) {
                return 'data:image/png;base64,' + byte;
            } else {
                return byte;
            }
        }

        function resizeImage(img, maxWidth, maxHeight, degrees) {
            var imgWidth = img.width,
            imgHeight = img.height;

            var ratio = 1,
            ratio1 = 1,
            ratio2 = 1;
            ratio1 = maxWidth / imgWidth;
            ratio2 = maxHeight / imgHeight;

            // Use the smallest ratio that the image best fit into the maxWidth x maxHeight box.
            if (ratio1 < ratio2) {
                ratio = ratio1;
            } else {
                ratio = ratio2;
            }
            var canvas = document.createElement("canvas");
            var canvasContext = canvas.getContext("2d");
            var canvasCopy = document.createElement("canvas");
            var copyContext = canvasCopy.getContext("2d");
            var canvasCopy2 = document.createElement("canvas");
            var copyContext2 = canvasCopy2.getContext("2d");
            canvasCopy.width = imgWidth;
            canvasCopy.height = imgHeight;
            copyContext.drawImage(img, 0, 0);

            // init
            canvasCopy2.width = imgWidth;
            canvasCopy2.height = imgHeight;
            copyContext2.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvasCopy2.width, canvasCopy2.height);


            var rounds = 1;
            var roundRatio = ratio * rounds;
            for (var i = 1; i <= rounds; i++) {


                // tmp
                canvasCopy.width = imgWidth * roundRatio / i;
                canvasCopy.height = imgHeight * roundRatio / i;

                copyContext.drawImage(canvasCopy2, 0, 0, canvasCopy2.width, canvasCopy2.height, 0, 0, canvasCopy.width, canvasCopy.height);

                // copy back
                canvasCopy2.width = imgWidth * roundRatio / i;
                canvasCopy2.height = imgHeight * roundRatio / i;
                copyContext2.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvasCopy2.width, canvasCopy2.height);

            } // end for

            canvas.width = imgWidth * roundRatio / rounds;
            canvas.height = imgHeight * roundRatio / rounds;
            canvasContext.drawImage(canvasCopy2, 0, 0, canvasCopy2.width, canvasCopy2.height, 0, 0, canvas.width, canvas.height);


            if (degrees === 90 || degrees === 270) {
                canvas.width = canvasCopy2.height;
                canvas.height = canvasCopy2.width;
            } else {
                canvas.width = canvasCopy2.width;
                canvas.height = canvasCopy2.height;
            }

            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            if (degrees === 90 || degrees === 270) {
                canvasContext.translate(canvasCopy2.height / 2, canvasCopy2.width / 2);
            } else {
                canvasContext.translate(canvasCopy2.width / 2, canvasCopy2.height / 2);
            }
            canvasContext.rotate(degrees * Math.PI / 180);
            canvasContext.drawImage(canvasCopy2, -canvasCopy2.width / 2, -canvasCopy2.height / 2);


            var dataURL = canvas.toDataURL();
            return dataURL;
        }

         function randomColor() {
             return '#' + Math.floor(Math.random() * 16777215).toString(16);
         }

         function isUndefinedOrNull(value) {
             return (angular.isUndefined(value) || value === '' || value === ' ');                 
         }

         function handleImageConversion(imgString, width, height, rotate) {             
                 var deffered = $q.defer();
                 var img = new Image();
                 try {
                     img.src = URL.createObjectURL(imgString);
                 } catch (e) {
                     img.src = byteToImage(imgString);
                 }
                 
                 img.onload = function () {
                     var base64String = resizeImage(img, width, height, rotate);
                     var dataCheck = base64String.split(',');
                     if (dataCheck.length <= 1) {
                         deffered.resolve(base64String);
                     } else {
                         deffered.resolve(dataCheck[1]);
                     }                     
                 };
                 img.onerror = function () {
                     deffered.reject('error loading resized image');
                 };
                 return deffered.promise;
         }

         function orderByAsc(list, propertyName) {
             return _.orderBy(list, [propertyName], ['asc']);
         }

         function orderByDesc(list, propertyName) {
             return _.orderBy(list, [propertyName], ['desc']);
         }


         return {
             isActivePath: isActivePath,
             byteToImage: byteToImage,
             resizeImage: resizeImage,
             randomColor: randomColor,
             isUndefinedOrNull: isUndefinedOrNull,
             handleImageConversion: handleImageConversion,
             orderByAsc: orderByAsc,
             orderByDesc: orderByDesc
         };
    });