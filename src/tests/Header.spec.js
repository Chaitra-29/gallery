import Header from "./../components/Header";
import { cleanup, screen, render, fireEvent } from "@testing-library/react";

describe("Header.js", () => {
  afterEach(cleanup);
  it("search", () => {
    let props = { onSearch: jest.fn() };
    render(<Header {...props} />);
    fireEvent.click(screen.getByRole('button'));
    expect(props.onSearch).toBeCalled();
  });
  it("input", () => {
    let onSearchChange = jest.fn();
    let props = { onSearch: jest.fn() };
    render(<Header {...props} />);
    fireEvent.change(screen.getByPlaceholderText('Search by keys'), {target: {value: 'dogs'}});
    expect(onSearchChange).not.toBeCalled();
  });
});
