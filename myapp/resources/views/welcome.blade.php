<!DOCTYPE html>
<html>

<head>
    <title>Language Demo</title>
</head>

<body>

    <h1>{{ __('messages.welcome') }}</h1>

    <p>{{ __('messages.about') }}</p>

    <p>{{ __('messages.contact') }}</p>

    <hr>

    <select id="language">
        <option value="vi" {{ session('locale', 'vi') == 'vi' ? 'selected' : '' }}>
            Tiếng Việt
        </option>

        <option value="en" {{ session('locale') == 'en' ? 'selected' : '' }}>
            English
        </option>
    </select>

    <script>
        document
            .getElementById('language')
            .addEventListener('change', function() {

                window.location.href =
                    '/language/' + this.value;

            });
    </script>

</body>

</html>
