
namespace game {

    export class UserDataService {

        static GetBoolean(name: string) {
            let value = this.GetCookie(name);
            if (value)
                return value == "1" ? true : false;
            return false;
        }

        static SetBoolean(name: string, value: boolean) {
            this.SetCookie(name, String(value ? 1 : 0));
        }

        static GetNumber(name: string) {
            let value = this.GetCookie(name);
            if (value)
                return Number(value);
            return 0;
        }

        static SetNumber(name: string, value: number) {
            this.SetCookie(name, String(value));
        }

        static GetCookie(name: string) {
            const value = "; " + document.cookie;
            const parts = value.split("; " + name + "=");
            if (parts.length == 2) {
                return parts.pop().split(";").shift();
            }
        }

        static SetCookie(name: string, val: string) {
            const date = new Date();
            const value = val;
            date.setTime(date.getTime() + (1000 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
        }

        static DeleteCookie(name: string) {
            const date = new Date();
            date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
        }

        static DeleteAllCookies() {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }
    }
}
