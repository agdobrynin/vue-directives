export default {
    bind(element, bindings) {
        const arg = bindings.arg;
        const fontSize = bindings.modifiers['fontSize'];
        const delay = bindings.modifiers['delay'] ? 2000 : 0;
        if (fontSize) {
            element.style.fontSize = '36px';
        }
        setTimeout(() => {
            element.style[arg] = bindings.value;
        }, delay);
    },
}
