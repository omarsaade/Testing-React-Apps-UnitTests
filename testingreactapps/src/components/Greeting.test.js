import Greeting from './Greeting'
import { render, screen } from '@testing-library/react';


test('renders Hello World as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert :akked
    const helloWorldElement = screen.getByText('Hello World!');
    // const helloWorldElement = screen.getByText(/Hello World!/i);
    // (/cc/s) nafsa ('cc' ,{exact:false})
    expect(helloWorldElement).toBeInTheDocument();



})
