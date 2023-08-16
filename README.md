
# Console Namespace Extender

[![npm version](https://badge.fury.io/js/console-namespace-extender.svg)](https://badge.fury.io/js/console-namespace-extender) <!-- Replace this with the actual URL to your npm package -->

Extend the console with namespaces for better-organized logging.

## Description

`console-namespace-extender` provides an elegant way to structure your logging by automatically enhancing your console methods with namespace capabilities. This package simplifies debugging and tracing by letting developers quickly identify where the logs are originating from.

## Installation

```bash
npm install console-namespace-extender
```

## Usage

After installing the package, simply import it at the starting point of your application. The console methods will be automatically overridden with namespace capabilities.

```javascript
import 'console-namespace-extender';
```

You can now use the console methods with namespace capabilities:

```javascript
console.settings.log('This is a log from settings module.');
// Outputs: '[settings]: This is a log from settings module.'
```

## Contributing

We welcome contributions! If you find a bug, have a suggestion, or want to improve the code, please follow the steps below:

### Reporting Bugs

1. Check if the bug was already reported in the [Issues](https://github.com/maamoon95/console-namespace-extender/issues) section.
2. If not, [open a new issue](https://github.com/maamoon95/console-namespace-extender/issues/new). Please provide a clear description, relevant information, and a code sample if possible.

### Code Contributions

1. Fork the repository and create your branch from `main`.
2. Install the dependencies with `npm install`.
3. Commit your changes (we recommend using [Commitizen](https://github.com/commitizen/cz-cli) for conventional commit format).
4. Push to your branch.
5. Submit a Pull Request.

Your contribution will be reviewed and, if deemed appropriate, will be merged into the main branch.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/maamoon95/console-namespace-extender/blob/main/LICENSE) file for details.

