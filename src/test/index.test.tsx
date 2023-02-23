import { render } from "@testing-library/react";
import { App } from "../app";
import {
  Header,
  Description,
  Mounting,
  Form,
  Videofragment,
  PhotoWork,
  Footer,
} from "../components";

describe("Тестирование", () => {
  test("Все компоненты", () => {
    const view = render(<App />);
    expect(view).toMatchSnapshot();
  });

  test("Header", () => {
    const { container } = render(<Header />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("header");
    expect(cls.length).toBe(1);
  });

  test("Description", () => {
    const { container } = render(<Description />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("description");
    expect(cls.length).toBe(1);
  });

  test("Mounting", () => {
    const { container } = render(<Mounting />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("mounting");
    expect(cls.length).toBe(1);
  });

  test("Form", () => {
    const { container } = render(<Form />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("form__description");
    expect(cls.length).toBe(1);
  });

  test("Videofragment", () => {
    const { container } = render(<Videofragment />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("video-block");
    expect(cls.length).toBe(1);
  });

  test("PhotoWork", () => {
    const { container } = render(<PhotoWork />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("work");
    expect(cls.length).toBe(1);
  });

  test("Footer", () => {
    const { container } = render(<Footer />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("footer");
    expect(cls.length).toBe(1);
  });
});
