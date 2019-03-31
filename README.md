# Myntcoin Message Verification and Signing for Myntcore




myntcore-message adds support for verifying and signing myntcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main myntcore repo](https://github.com/silence48/myntcore) for more information.

## Getting Started

```sh
npm install myntcore-message
```

```sh
bower install myntcore-message
```

To sign a message:

```javascript
var myntcore = require('myntcore-lib');
var Message = require('myntcore-message');

var privateKey = myntcore.PrivateKey.fromWIF('5K2DxqJ9kLFL3hF3KEWDftAig3TyAXenDxpr27PaLBieuSFo5PQ');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'RGRsG7UQc3AmvdrhPDngpPjvTNhJQFeHYj';
var signature = 'G5cFMHRysjcxkBJ7mol8l3cjPbFQFQ68fNqTGehTO9/cLNUaflt3gQT//yAUp5fqWF0snDlZYkXJoooazBicRTg=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/silence48/myntcore/blob/master/CONTRIBUTING.md) on the main myntcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/silence48/myntcore/blob/master/LICENSE).
