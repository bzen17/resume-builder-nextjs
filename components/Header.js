
import React from "react";
import { Menu, Dropdown, Button, Header, Icon, Image } from "semantic-ui-react";
import Link from "next/link";

export default function CustomHeader() {
  return (
    <Menu style={{ marginTop: "10px", borderRadius:"10px" }}>
      <Image
        width="48"
        height="48"
        alt="logo"
        src="/assets/logo.png"
      />
        <Menu.Item style={{display:'flex',flexDirection:'column', alignItems: 'flex-start', paddingTop: '0.75em', paddingBottom: '0.75em'}}>
            <Menu.Header><b>Resume Builder</b></Menu.Header>
            <Menu.Header style={{fontSize:'0.75rem'}}>Form to HTML Resume in seconds</Menu.Header>
        </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item text="Sample Resume">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href="/sample/html-template.html">
                <a className="item" target="_blank">
                  HTML
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/sample/pdf-template.html" target="_blank">
                <a className="item">PDF</a>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
