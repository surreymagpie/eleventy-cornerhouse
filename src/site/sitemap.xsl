<?xml version="1.0"  encoding ="UTF-8" ?>
<xsl:stylesheet
	version="1.0" 
	xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Sitemap</title>
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700" rel="stylesheet" />
		<style>body{margin:0;padding:3em;font:1em Montserrat,sans-serif}table{border-collapse:collapse}thead{background-color: #ccc}th,td{padding:1em;border:1px solid #333}a{text-decoration:none;color:#5080f0}tr:nth-child(even){background-color: #ededed}
</style>
	</head>

	<body>
		<h1>Sitemap</h1>
		<p>This sitemap contains
			<span><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></span> URLs
		</p>
		<p>This document is intended for search engines but is presented here in a human-readable form.</p>
		<table>
			<thead>
				<tr>
					<th>URL</th>
					<th>Modified</th>
					<th>Change Frequency</th>
					<th>Priority</th>
				</tr>
			</thead>
			<tbody>
				<xsl:for-each select="sitemap:urlset/sitemap:url">
				<xsl:sort select="sitemap:loc" order="ascending" />
				<xsl:variable name="loc"><xsl:value-of select="sitemap:loc"/></xsl:variable>
				<tr>
					<td>
						<a href="{$loc}">
							<xsl:value-of select="sitemap:loc" />
						</a>
					</td>
					<td><xsl:value-of select="substring(sitemap:lastmod, 0, 11)" /></td>
					<td><xsl:value-of select="sitemap:changefreq" /></td>
					<td><xsl:value-of select="sitemap:priority" /></td>
				</tr>

				</xsl:for-each>
			</tbody>
		</table>
	</body>
	</html>

</xsl:template>
</xsl:stylesheet>
