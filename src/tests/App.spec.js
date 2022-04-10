import App from "./../App";
import { cleanup, screen,render,fireEvent } from "@testing-library/react";
import * as api from "./../util/api";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("App.js", () => {
  afterEach(cleanup);
  it("renders check snapshot", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("state value present", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().state).toEqual({
      checked: false,
      filter: false,
      loading: true,
      page: 1,
      photos: [],
      tags: '"mountains","dogs"',
    });
  });
  describe("fetchPhotos", () => {
    it("getPhotosfromTags", async () => {
      api.getPhotosfromTags = jest.fn();
      api.getPhotos = jest.fn();
      let wrapper = shallow(<App />);
      wrapper.instance().fetchPhotos();
      expect(api.getPhotosfromTags).toBeCalled();
    });
  });
  describe("componentDidMount", () => {
    let fetchPhotosSpy, componentDidMountSpy;
    let obj = { photos: [{ photo: "photo" }], page: 2 };
    beforeEach(() => {
      fetchPhotosSpy = jest
        .spyOn(App.prototype, "fetchPhotos")
        .mockResolvedValue(obj);
      componentDidMountSpy = jest.spyOn(App.prototype, "componentDidMount");
      shallow(<App />);
    });

    it("componentDidMount and fetchPhotosSpy are called", async () => {
      expect(fetchPhotosSpy).toBeCalledTimes(1);
      expect(componentDidMountSpy).toHaveBeenCalled();
    });
  });
});
