import copy from "rollup-plugin-copy";

export default {
  plugins: [
    copy({
      targets: [
        { src: "assets/fonts/*", dest: "dist/assets/fonts" },
        { src: "assets/icons/*", dest: "dist/assets/icons" },
        { src: "assets/images/*", dest: "dist/assets/images" },
      ],
    }),
  ],
};
