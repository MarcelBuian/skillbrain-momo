const say = (fn) => {
    const message = fn();
    console.log(message);
};

const myCallbackFn = () => 'Salut!';
say(myCallbackFn);

