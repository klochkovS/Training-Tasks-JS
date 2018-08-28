(function (w, d, u) {
  'use strict';

  const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Peter' }, { id: 3, name: 'Kate' }];

  arr.forEach(({ id, name }) => {
    const div = d.createElement('div');
    div.onclick = () => {
      alert(`Div number is ${id} . Name is: ${name}`);
    };

    div.style.width = '30px';
    div.style.height = '30px';
    div.style.border = '1px solid red';
    d.body.appendChild(div);

    return div;
  });

})(window, document, undefined);
