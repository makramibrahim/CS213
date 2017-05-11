<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/"> 
<html> 
  <head>
    <title>CS 213 | Week09</title>
  </head>
<body style="background-color:#CFE3F8; width:700px;; padding:2em; margin:auto" >

<header style="background-color:#2B8BEC; width:700px;">
<h1 style="color:white; padding:1em; text-align:center">Makram Ibrahim | CS213 Week 09</h1>
</header>

  <xsl:for-each select="bsa/council">
 <table cellspaacing="1" cellpadding="5" style="background-color:#4EF6B5">
    <thead>
      <tr bgcolor="#9acd32">
        <th style="text-align:left; background-color:#FB6060">
          <xsl:value-of select="@name"/>
          <xsl:value-of select="@number"/>
        </th>
      </tr>
    </thead>
    
    <xsl:for-each select="troop">
      <thead border="1">
        <tr> 
          <th colspan="6" style="text-align:left; background-color:#FB6060"> 
            <xsl:value-of select="@unitName"/>
            :
            <xsl:value-of select="@number"/>
          </th>
        </tr>
      </thead>
      <tr border="3" style="background-color:#EFCB71">
        <th style="padding: 15px">Scout Name</th>
        <th style="padding: 15px">Street</th>
        <th style="padding: 15px">City</th>
        <th style="padding: 15px">State</th>
        <th style="padding: 15px">Phone Number</th>
        <th style="padding: 15px">Current Rank</th>
      </tr>
       <xsl:for-each select="scout">
        <tr style="background-color:#11F30B">
        <td style="color:blue; padding:5px">
          <xsl:value-of select="lastName"/>,
          <xsl:value-of select="firstName"/>
         </td>

        <td style="color:blue; padding:5px">
          <xsl:value-of select="address/street"/>
        </td>
         <td style="color:blue; padding:5px">
          <xsl:value-of select="address/city"/>
        </td>
        <td style="color:blue; padding:5px">
          <xsl:value-of select="address/state"/>
        </td>
        <td style="color:blue; padding:5px">
          <xsl:value-of select="phoneNumber"/>
        </td>
        <td style="color:blue; padding:5px; text-align:right">
        <xsl:value-of select="rank/@content"/> 
        </td>
        </tr> 
      <xsl:for-each select="rank">
      <tr style="color:#010007">
        <td></td>
          <td style="text-align:right">Rank:</td>
        <td>
        <xsl:value-of select="@content"/>
      </td>
      <td style="text-align:right">Date Earned:</td>
      <td>
        <xsl:value-of select="@dateEarned"/>
      </td>
      </tr>
       </xsl:for-each>
      <xsl:for-each select="meritbadge">
        <tr style="color:#010007">
          <td></td>
        <td style="text-align:right">Budget:</td>
        <td style="max-width:15px">
        <xsl:value-of select="@content"/>
       </td>
       <td style="text-align:right">Date Earned:</td>
       <td>
         <xsl:value-of select="@dateEarned"/>
       </td>
        </tr>
      </xsl:for-each>
    </xsl:for-each>
    </xsl:for-each>
    </table>
  </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>






