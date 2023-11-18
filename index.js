let arr = [5, 56, 43, 2, 4, 6, 7];

function fibs(n) {
    if (n <= 0) {
        return [];
    }

    if (n === 1) {
        return [0];
    }

    let made = new Array(n);
    made[0] = 0;
    made[1] = 1;

    for (let i = 2; i < n; i++) {
        made[i] = made[i - 1] + made[i - 2];
    }

    return made;
}

console.log('Fibonacci sequence iteratively', fibs(3));

function fibsRec(n) {
    if (n === 2) {
        return [0, 1];
    } else {
        let made = fibsRec(n - 1);
        made.push(made.slice(-1)[0] + made.slice(-2)[0]);
        return made;
    }
}

console.log('Fibonacci sequence recursively', fibsRec(6));

function mergeSort(list) {
    if (list.length <= 1) {
        return list;
    }

    let mid = Math.ceil(list.length / 2);
    let l = list.slice(0, mid);
    let r = list.slice(mid);

    let leftSorted = mergeSort(l);
    let rightSorted = mergeSort(r);

    return merge(leftSorted, rightSorted);

    function merge(x, o) {
        let result = [];
        let a = 0;
        let b = 0;

        while (a < x.length && b < o.length) {
            if (x[a] <= o[b]) {
                result.push(x[a]);
                a++;
            } else {
                result.push(o[b]);
                b++;
            }
        }

        result = result.concat(x.slice(a), o.slice(b));
        return result;
    }
}

console.log('Merge and Sort recursively:', mergeSort(arr));
