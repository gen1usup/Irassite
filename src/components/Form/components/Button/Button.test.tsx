// import { Button } from './Button';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
//
// describe('Button', () => {
//   it('render component', () => {
//     render(<Button label="test" />);
//   });
//
//   it('render component with text', () => {
//     render(<Button label="test" />);
//
//     expect(screen.getByText(/test/)).toBeInTheDocument();
//   });
//
//   it('render multiply components', () => {
//     render(
//       <>
//         <Button label="test1" />
//         <Button label="test2" />
//       </>
//     );
//
//     expect(screen.queryAllByRole('button').length).toBe(2);
//   });
//
//   it('button is disabled', () => {
//     render(<Button label="test" disabled />);
//
//     expect(screen.getByText(/test/)).toBeDisabled();
//   });
//
//   /*   it('button click with userEvent', async () => {
//         const mockHandler = jest.fn();
//         render(<Button label="test" click={mockHandler} />);
//
//         await userEvent.click(screen.getByText(/test/));
//
//         expect(mockHandler).toHaveBeenCalledTimes(1);
//     });
//
//     it('button async click', async () => {
//         const mockHandler = jest.fn();
//         render(<Button label="test" click={() => setTimeout(mockHandler, 1500)} />);
//
//         await userEvent.click(screen.getByText(/test/));
//
//         await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
//             timeout: 1600,
//         });*/
// });
