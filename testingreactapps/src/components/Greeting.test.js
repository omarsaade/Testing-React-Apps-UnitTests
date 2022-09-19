import Greeting from './Greeting'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


// Testing suites
//a feature or a category
// and now we have one suite with one test
describe("Greeting component", () => {
    test('renders "Hello World" as a text', () => {
        render(<Greeting />);
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    })



    test('renders "good to see u" if the button was Not clicked', () => {
        render(<Greeting />);
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    })



    test('renders "changed" if the button was clicked', () => {
        render(<Greeting />);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();

    })





    test('does not render "good to see you!" if the button was clicked', () => {
        render(<Greeting />);

        //Act
        //if we click a button
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert1
        const outputElement = screen.queryByText(/It's good to see you!/i);
        expect(outputElement).toBeNull();
    });



});

// test('renders Hello World as a text', () => {
//     //Arrange
//     render(<Greeting />);

//     //Act
//     // ... nothing

//     //Assert :akked
//     const helloWorldElement = screen.getByText('Hello World!');
//     // const helloWorldElement = screen.getByText(/Hello World!/i);
//     // (/cc/s) nafsa ('cc' ,{exact:false})
//     expect(helloWorldElement).toBeInTheDocument();



// })
