// 2D-shapes
exports.Annulus = {
  Area = {
    inner_outer_radius_defined(r, R) {
      return Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));
    },
    average_radius_width_defined(p, w) {
      return 2 * Math.PI * p * w;
    }
  },
  Average_radius(r, R) {
    return .5 * (r + R);
  },
  Width(r, R) {
    return R - r;
  }
};
exports.Circle = {
  Area(r) {
    return Math.PI * Math.pow(r, 2);
  },
  Circumference = {
    diameter_defined(d) {
      return Math.PI * d;
    },
    radius_defined(r) {
      return 2 * Math.PI * r;
    }
  },
  Diameter(r){
    return 2 * r;
  } 
};