import UiButton from "./UiButton";

export default {
    title: 'Ui-Kit/ui-button',
    component: UiButton
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UiButton {...args} />;

const props = {
    text: 'Hello', 
    onClick: () => console.log('Button clicked'), 
    disabled: false,
    theme: 'dark',
    classes: ''
}

//👇 Each story then reuses that template
export const Light = Template.bind({});

Light.args = {
   ...props,
   theme: 'light'
};
export const Dark = Template.bind({});

Dark.args = {
   ...props,
   theme: 'dark'
};
export const Disabled = Template.bind({});

Disabled.args = {
   ...props,
   disabled: true
};