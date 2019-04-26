export default interface EmbedFooter {

    /**
     * Footer text.
     */
    text: string;

    /**
     * URL of the footer icon.
     * Only supports HTTP(s) and attachments
     */
    icon_url?: string;

    /**
     * A proxied URL of the footer icon.
     */
    proxy_icon_url?: string;

}