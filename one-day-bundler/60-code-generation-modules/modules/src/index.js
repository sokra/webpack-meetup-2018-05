(function(__magic__, exports) {
    var X = __magic__(1);
    var Y = __magic__(2);

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var HelloWorld = function (_React$Component) {
        _inherits(HelloWorld, _React$Component);

        function HelloWorld(props) {
            _classCallCheck(this, HelloWorld);

            var _this = _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).call(this, props));

            _this.state = {
                LazyComponent: null
            };
            return _this;
        }

        _createClass(HelloWorld, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                __magic__.loadChunk(0).then(__magic__.bind(null, 3)).then(function (_ref) {
                    var LazyComponent = _ref.default;

                    _this2.setState({ LazyComponent: LazyComponent });
                });
            }
        }, {
            key: "render",
            value: function render() {
                var LazyComponent = this.state.LazyComponent;

                return X.default.createElement(
                    "div",
                    null,
                    X.default.createElement(
                        Y.default,
                        null,
                        "Hello World"
                    ),
                    LazyComponent ? X.default.createElement(LazyComponent, null) : X.default.createElement(
                        "span",
                        null,
                        "Loading..."
                    )
                );
            }
        }]);

        return HelloWorld;
    }(X.default.Component);

    var node = document.createElement("div");
    document.body.appendChild(node);

    X.render(X.default.createElement(HelloWorld, null), node);
})