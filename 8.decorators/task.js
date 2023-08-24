"use strict"

function cachingDecoratorNew(func) {
    const cache = [];

    function wrapper(...args) {
        const hash = md5(args);

        const objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
            return "Из кеша: " + objectInCache.value;
        } else {
            const value = func(...args);
            cache.push({hash, value});

            if (cache.length > 5) {
                cache.shift();
            }
            return "Вычисляем: " + value;
        }
    }
    return wrapper;
}

// Задача №2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let isTrottled = false;

    function wrapper(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(args);
            wrapper.count++;
        }, delay);
        if (!isTrottled) {
            func(...args);
            wrapper.count++;
            isTrottled = true;
        }
        wrapper.allCount++;
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}